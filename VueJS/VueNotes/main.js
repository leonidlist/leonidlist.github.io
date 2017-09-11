var config = {
    apiKey: "AIzaSyDP9Eq7Acz5Tj29XzN96haotbLPFRPw0BA",
    authDomain: "vuenotelist.firebaseapp.com",
    databaseURL: "https://vuenotelist.firebaseio.com",
    projectId: "vuenotelist",
    storageBucket: "vuenotelist.appspot.com",
    messagingSenderId: "772948068889"
};
firebase.initializeApp(config);

var notesRef = firebase.database().ref('notes')

new Vue({
  el: '#app',
  data: {
    show: false,
    newNote: {
      title: '',
      content: '',
      default: true,
      date: 0
    }
  },
  firebase: {
    notes: notesRef
  },
  computed: {
    dateOfNote(){
      var d = +new Date
      return d
    }
  },
  methods: {
    clearTitle: function(){
      newNote.title = ''
    },
    clearContent: function(){
      newNote.content = ''
    },
    deleteNote: function(te){
      notesRef.child(te['.key']).remove()
    },
    editNote: function(te){
      notesRef.child(te['.key']).update({default: false})
    },
    editNoteConfirm: function(te, tt, tc){
      notesRef.child(te['.key']).update({
        title: tt,
        content: tc,
        default: true
      })
    },
    addNote: function(){
      if(this.newNote.title !== '' && this.newNote.content !== ''){
        var d = +new Date
        this.newNote.date = d
        notesRef.push(this.newNote);
        this.newNote.title = ''
        this.newNote.content = ''
      }
      else{
        alert('Error')
      }
    }
  }
});
