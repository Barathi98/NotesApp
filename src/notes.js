const notesList=[{
  notesId:101,
    subject:'Tamil',
    noteTitle:'Ilakanam',
    grade : 8

},
{ notesId:102,
    subject:'English',
    noteTitle:'grammer',
    grade : 8}
];



createNotes=(notesId,subject,noteTitle,grade)=>{
    this.notesId = notesId
    this.subject= subject
    this.noteTitle = noteTitle
    this.grade = grade
    const createdNotes= {notesId,subject,noteTitle,grade}
    notesList.push(createdNotes);
   
    

}


