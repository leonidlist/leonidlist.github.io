new Vue({
  el: '#app',
  data: {
    newTitle: 'Введите название заметки здесь.',
    newContent: 'Создежимое заметки...',
    show: false,
    notes: [
      {
        title: 'Выучить API Vue.js',
        content: 'Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів.'
      },
      {
        title: 'Test title',
        content: 'Some contentr here lorem ipus m dolor site amet'
      },
    ]
  },
  methods: {
    createNote: function(){
      if(this.newTitle != '' && this.newContent != ''){
        this.notes.push({
          title: this.newTitle,
          content: this.newContent
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
  }
})
