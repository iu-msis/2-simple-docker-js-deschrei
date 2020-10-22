var app = new Vue({
  el: '#comment',
  data:{
    commentList: [],
    newComment: {
      id: '',
      commentText: ''
    }
  },

  methods: {
    newCommentData(){
      return {
        commentText: ""
      }
    },


    createComment(){
      fetch('api/comments/create.php',{
        method: 'POST',
        body: JSON.stringify(this.newComment),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
        .then( response => response.json() )
        .then( json => {
          console.log ("Returned from post:", json);
          this.commentList.push(json[json.length - 1]);
          this.newComment = this.newCommentData();
        });
      console.log("creating (POSTing)...!");
      console.log(this.newComment);
    },







  },



  created(){
    fetch("api/comments/")
    .then( response => response.json() )
    .then( json => {
        this.commentList = json;

    console.log(json)}
    );

    this.newCommentForm = this.newCommentData();


  }


})
