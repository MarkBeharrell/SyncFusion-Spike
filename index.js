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
  fileManagerSettings: {
    enable: true,
    path: '/Pictures/Food',
    ajaxSettings: {
      url: hostUrl + 'api/FileManager/FileOperations',
      getImageUrl: hostUrl + 'api/FileManager/GetImage',
      uploadUrl: hostUrl + 'api/FileManager/Upload',
      downloadUrl: hostUrl + 'api/FileManager/Download',
    },
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
});
defaultRTE.appendTo('#defaultRTE');

/**
 * Mention default sample
 */
var messageData = new ej.dropdowns.Mention({
  dataSource: emailData,
  fields: { text: 'Name' },
});
messageData.appendTo('#defaultRTE');
