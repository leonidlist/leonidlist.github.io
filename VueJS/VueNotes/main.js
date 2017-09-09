new Vue({
  el: '#app',
  data: {
    newTitle: 'Введите название заметки здесь.',
    newContent: 'Создежимое заметки...',
    show: false,
    notes: [
      {
        title: 'Выучить API Vue.js',
        content: 'Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів.',
        default: true
      },
      {
        title: 'Test title',
        content: 'Some contentr here lorem ipus m dolor site amet',
        default: true
      },
    ]
  },
  methods: {
    createNote: function(){
      if(this.newTitle != '' && this.newContent != ''){
        this.notes.push({
          title: this.newTitle,
          content: this.newContent,
          default: true
        })
        this.newTitle = ''
        this.newContent = ''
      } else{
        alert('Error')
      }
    },
    clearTitle: function(){
      this.newTitle = ''
    },
    clearContent: function(){
      this.newContent = ''
    },
    deleteNote: function(te){
      this.notes.splice(this.notes.indexOf(te), 1)
    },
    editNote: function(te){
      index = this.notes.indexOf(te)
      this.notes[index].default = false
    },
    editNoteConfirm: function(te){
      index = this.notes.indexOf(te)
      this.notes[index].default = true
    }
  }
})
