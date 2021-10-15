export default function blockTablePlugins(editor) {

    editor.BlockManager.add('newTableDiv', {
        label: 'Table DIV',
        attributes: { class: 'fa fa-table' },
        draggable: false,
        content: ` <div class="t-block">
    <div class="t-block--row" data-gjs-draggable="none">
      <div class="t-block--item" data-gjs-draggable="none">Текст 1</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 2</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 3</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 4</div>
    </div>
    <div class="t-block--row" data-gjs-draggable="none">
      <div class="t-block--item" data-gjs-draggable="none">Текст 1</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 2</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 3</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 4</div>
    </div>
    <div class="t-block--row" data-gjs-draggable="none">
      <div class="t-block--item" data-gjs-draggable="none">Текст 1</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 2</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 3</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 4</div>
    </div>
    <div class="t-block--row" data-gjs-draggable="none">
      <div class="t-block--item" data-gjs-draggable="none">Текст 1</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 2</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 3</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 4</div>
    </div>
    <div class="t-block--row" data-gjs-draggable="none">
      <div class="t-block--item" data-gjs-draggable="none">Текст 1</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 2</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 3</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 4</div>
    </div>
    <div class="t-block--row" data-gjs-draggable="none">
      <div class="t-block--item" data-gjs-draggable="none">Текст 1</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 2</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 3</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 4</div>
    </div>
    <div class="t-block--row" data-gjs-draggable="none">
      <div class="t-block--item" data-gjs-draggable="none">Текст 1</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 2</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 3</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 4</div>
    </div>
    <div class="t-block--row" data-gjs-draggable="none">
      <div class="t-block--item" data-gjs-draggable="none">Текст 1</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 2</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 3</div>
      <div class="t-block--item" data-gjs-draggable="none">Текст 4</div>
    </div>
  </div>
  <style>
  .t-block{
    width: 100%;
    height: auto;
    margin: 25px 0;
    padding: 0;
  }
  .t-block--row{
    display: flex;
    justify-content: space-between;
  }
  .t-block--item{
    width: 25%;
    margin-bottom: -1px;
    padding: 5px;
    border: 1px solid #666;
  }
  </style>`
    });


    editor.BlockManager.add('newTableTable', {
        label: 'Table tag Table',
        attributes: { class: 'fa fa-table' },
        draggable: false,
        content: ` <table class="table">
    <tr data-gjs-draggable="none">
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
    </tr>
    <tr data-gjs-draggable="none">
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
    </tr>
    <tr data-gjs-draggable="none">
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
    </tr>
    <tr data-gjs-draggable="none">
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
    </tr>
    <tr data-gjs-draggable="none">
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
    </tr>
    <tr data-gjs-draggable="none">
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
    </tr>
    <tr data-gjs-draggable="none">
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
    </tr>
    <tr data-gjs-draggable="none">
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
        <td data-gjs-draggable="none"><p data-gjs-draggable="none">Текст</p></td>
    </tr>
  </table>
  <style>
  .table{
    width: 100%; 
    margin: 0;
    border-collapse: collapse;
    padding: 0;
   }
   .table tr {
     width: 100%;
     margin: 0;
     padding: 0;
   }
   .table tr td{
     width: 25%;
     margin: -1px;
     padding: 5px;
     font-size: 14px;
     border: 1px solid #666
   }
   .table tr td p{
     margin: 0
   }
  </style>`
    });
}
