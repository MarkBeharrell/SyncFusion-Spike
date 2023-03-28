var storedImages = [];

var emailData = [
  {
    Name: 'Selma Rose',
    Eimg: '3',
    EmailId: 'selma@gmail.com',
  },
  {
    Name: 'Russo Kay',
    Eimg: '8',
    EmailId: 'russo@gmail.com',
  },
  {
    Name: 'Camden Kate',
    Eimg: '9',
    EmailId: 'camden@gmail.com',
  },
  {
    Name: 'Mary Kate',
    Eimg: '4',
    EmailId: 'marry@gmail.com',
  },
  {
    Name: 'Ursula Ann',
    Eimg: '2',
    EmailId: 'ursula@gmail.com',
  },
  {
    Name: 'Margaret',
    Eimg: '5',
    EmailId: 'margaret@gmail.com',
  },
  {
    Name: 'Laura Grace',
    Eimg: '6',
    EmailId: 'laura@gmail.com',
  },
  {
    Name: 'Robert',
    Eimg: '8',
    EmailId: 'robert@gmail.com',
  },
  {
    Name: 'Albert',
    Eimg: '9',
    EmailId: 'albert@gmail.com',
  },
  {
    Name: 'Michale',
    Eimg: '10',
    EmailId: 'michale@gmail.com',
  },
  {
    Name: 'Andrew James',
    Eimg: '7',
    EmailId: 'james@gmail.com',
  },
  {
    Name: 'Rosalie',
    Eimg: '4',
    EmailId: 'rosalie@gmail.com',
  },
  {
    Name: 'Stella Ruth',
    Eimg: '2',
    EmailId: 'stella@gmail.com',
  },
  {
    Name: 'Richard Rose',
    Eimg: '10',
    EmailId: 'richard@gmail.com',
  },
  {
    Name: 'Gabrielle',
    Eimg: '3',
    EmailId: 'gabrielle@gmail.com',
  },
  {
    Name: 'Thomas',
    Eimg: '7',
    EmailId: 'thomas@gmail.com',
  },
  {
    Name: 'Charles Danny',
    Eimg: '8',
    EmailId: 'charles@gmail.com',
  },
  {
    Name: 'Daniel',
    Eimg: '10',
    EmailId: 'daniel@gmail.com',
  },
  {
    Name: 'Matthew',
    Eimg: '7',
    EmailId: 'matthew@gmail.com',
  },
  {
    Name: 'Donald Krish',
    Eimg: '9',
    EmailId: 'donald@gmail.com',
  },
  {
    Name: 'Yohana',
    Eimg: '1',
    EmailId: 'yohana@gmail.com',
  },
  {
    Name: 'Kevin Paul',
    Eimg: '10',
    EmailId: 'kevin@gmail.com',
  },
];

/**
 * Rich Text Editor overview sample
 */
var defaultRTE;
var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

var defaultRTE = new ej.richtexteditor.RichTextEditor({
  toolbarSettings: {
    items: [
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      'FontName',
      'FontSize',
      'FontColor',
      'BackgroundColor',
      'LowerCase',
      'UpperCase',
      'SuperScript',
      'SubScript',
      '|',
      'Formats',
      'Alignments',
      'NumberFormatList',
      'BulletFormatList',
      'Outdent',
      'Indent',
      '|',
      'CreateTable',
      'CreateLink',
      'Image',
      'FileManager',
      '|',
      'ClearFormat',
      'Print',
      'SourceCode',
      'FullScreen',
      '|',
      'Undo',
      'Redo',
    ],
  },
  quickToolbarSettings: {
    table: [
      'TableHeader',
      'TableRows',
      'TableColumns',
      'TableCell',
      '-',
      'BackgroundColor',
      'TableRemove',
      'TableCellVerticalAlign',
      'Styles',
    ],
  },
  actionComplete: onActionSuccess,
  afterImageDelete: onImageDelete,
  insertImageSettings: {
    allowedTypes: ['.jpeg', '.jpg', '.png'],
    display: 'inline',
    width: 'auto',
    height: 'auto',
    saveFormat: 'Base64',
  },
});
defaultRTE.appendTo('#defaultRTE');

// Initialize Mention control.
var emailObj = new ej.dropdowns.Mention({
  dataSource: emailData,
  fields: { text: 'Name' },
  suggestionCount: 8,
  displayTemplate: '<a title=${EmailId}>@${Name}</a>',
  itemTemplate: '<table><tr><td><div id="mention-TemplateList"><img class="mentionEmpImage" src="../../../images/${EmployeeImage}" alt="employee" /><span class="e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom ${Status}"></span></div></td><td><span class="person">${Name}</span><span class="email">${EmailId}</span></td</tr></table>',
  popupWidth: '250px',
  popupHeight: '200px',
  target: '#mention_integration_rte-edit-view',
  allowSpaces: true
});
emailObj.appendTo('#mentionEditor');


function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 =
    (typeof performance !== 'undefined' &&
      performance.now &&
      performance.now() * 1000) ||
    0; //Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function onActionSuccess(args) {
  //NARROW THE SUCCESS TO ONLY REPORT ON IMAGES BEING INSERTED/DROPPED
  if (args.requestType == 'Images') {
    //SRC OF THE ELEMENT WILL BE ALREADY AS BASE64 AS DETERMINED BY THE saveFormat: 'Base64'
    console.log(args);
    console.log(args.elements[0].src);

    args.elements[0].id = generateUUID(); //USE THE BUILT IN JARVIS ONE :)
    storedImages.push(args.elements[0].id);
    //AT THIS STAGE THE ORIGINAL SAVE TO BLOB CAN BE HOOKED IN - IMAGE WILL NEED AN IDENTIFIER THATS RETURNED BACK TO THE EDITOR SO THAT WHEN DELETED FROM THE EDITOR THE IMAGE IN THE BLOB IS ALSO DELETED
    console.log('Whats stored in the blob?');
    console.log(storedImages);
  }
}

function onImageDelete(args) {
  var imageID = args.element.getAttribute('id');

  var index = storedImages.findIndex((num) => num === imageID);

  console.log('Going to delete ' + imageID + ' from the blob @ index ' + index);

  storedImages.splice(index, 1);
}
