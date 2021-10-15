import blockTablePlugins from './plugins/block-table-plugins.js';

const editor = grapesjs.init({
  container: '#gjs',
  fromElement: true,
  height: 'calc(100vh - 154px)',
  width: 'auto',
  plugins: [blockTablePlugins],
  storageManager: {
    id: 'gjs-',
    type: 'local',
    autosave: false,
    autoload: true,
    stepsBeforeSave: 1,
    storeComponents: true,
    storeStyles: true,
    storeHtml: true,
    storeCss: true,
  },
  blockManager: {
    appendTo: '#blocks',
    blocks: [
      {
        id: 'section',
        label: '<b>Section</b>',
        attributes: { class: 'gjs-block-section' },
        content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
      }, {
        id: 'text',
        label: 'Text',
        content: '<div data-gjs-type="text">Insert your text here</div>',
      }, {
        id: 'image',
        label: 'Image',
        select: true,
        content: { type: 'image' },
        activate: true,
      }
    ]
  },
  layerManager: {
    appendTo: '.layers-container'
  },
  deviceManager: {
    devices: [{
      name: 'Desktop',
      width: '',
    }, {
      name: 'Tablet',
      width: '768px',
      widthMedia: '1200px',
    }, {
      name: 'Mobile',
      width: '320px',
      widthMedia: '480px',
    }]
  },
  panels: {
    defaults: [{
      id: 'layers',
      el: '.panel__right',
      resizable: {
        maxDim: 350,
        minDim: 200,
        tc: 0,
        cl: 1,
        cr: 0,
        bc: 0,
        keyWidth: 'flex-basis',
      },
    }, {
      id: 'panel-switcher',
      el: '.panel__switcher',
      buttons: [{
        id: 'show-layers',
        active: true,
        label: 'Layers',
        command: 'show-layers',
        togglable: false,
      }, {
        id: 'show-style',
        active: true,
        label: 'Styles',
        command: 'show-styles',
        togglable: false,
      }, {
        id: 'show-traits',
        active: true,
        label: 'Traits',
        command: 'show-traits',
        togglable: false,
      }],
    }, {
      id: 'panel-devices',
      el: '.panel__devices',
      buttons: [{
        id: 'device-desktop',
        label: 'D',
        command: 'set-device-desktop',
        active: true,
        togglable: false,
      }, {
        id: 'device-tablet',
        label: 'T',
        command: 'set-device-tablet',
        togglable: false,
      }, {
        id: 'device-mobile',
        label: 'M',
        command: 'set-device-mobile',
        togglable: false,
      }],
    }]
  },
  traitManager: {
    appendTo: '.traits-container',
  },
  selectorManager: {
    appendTo: '.styles-container'
  },
  styleManager: {
    appendTo: '.styles-container',
    sectors: [{
      name: 'Dimension',
      open: false,
      buildProps: ['width', 'min-height', 'padding'],
      properties: [
        {
          type: 'integer',
          name: 'The width',
          property: 'width',
          units: ['px', '%'],
          defaults: 'auto',
          min: 0,
        }
      ]
    }, {
      name: 'Extra',
      open: false,
      buildProps: ['background-color', 'box-shadow', 'custom-prop'],
      properties: [
        {
          id: 'custom-prop',
          name: 'Custom Label',
          property: 'font-size',
          type: 'select',
          defaults: '32px',
          options: [
            { value: '12px', name: 'Tiny' },
            { value: '18px', name: 'Medium' },
            { value: '32px', name: 'Big' },
          ],
        }
      ]
    }]
  },
});

editor.Panels.addPanel({
  id: 'panel-top',
  el: '.panel__top',
});
editor.Panels.addPanel({
  id: 'basic-actions',
  el: '.panel__basic-actions',
  buttons: [
    {
      id: 'visibility',
      active: true,
      className: 'btn-toggle-borders',
      label: '<u>B</u>',
      command: 'sw-visibility',
    }, {
      id: 'export',
      className: 'btn-open-export',
      label: 'Exp',
      command: 'export-template',
      context: 'export-template',
    }, {
      id: 'show-json',
      className: 'btn-show-json',
      label: 'JSON',
      context: 'show-json',
      command(editor) {
        editor.Modal.setTitle('Components JSON')
          .setContent(`<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`)
          .open();
      },
    }
  ],
});

// Define commands
editor.Commands.add('show-layers', {
  getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
  getLayersEl(row) { return row.querySelector('.layers-container') },

  run(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor));
    lmEl.style.display = '';
  },
  stop(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor));
    lmEl.style.display = 'none';
  },
});

editor.Commands.add('show-styles', {
  getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
  getStyleEl(row) { return row.querySelector('.styles-container') },

  run(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = '';
  },
  stop(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = 'none';
  },
});

editor.Commands.add('show-traits', {
  getTraitsEl(editor) {
    const row = editor.getContainer().closest('.editor-row');
    return row.querySelector('.traits-container');
  },
  run(editor, sender) {
    this.getTraitsEl(editor).style.display = '';
  },
  stop(editor, sender) {
    this.getTraitsEl(editor).style.display = 'none';
  },
});

// Commands
editor.Commands.add('set-device-desktop', {
  run: editor => editor.setDevice('Desktop')
});
editor.Commands.add('set-device-tablet', {
  run: editor => editor.setDevice('Tablet')
});
editor.Commands.add('set-device-mobile', {
  run: editor => editor.setDevice('Mobile')
});