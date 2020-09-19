var app = new Vue({
  el: '#userProfile',
  data: {
    userPicture: '',
    userName: '',
    userCountry: '',
    userBirthdate: '',
    userAge: '',
    userEmail: ''
  },

  created(){
    this.fetchUser();

  },
  methods: {
    formatDate(d) {
      return moment(d).format("dddd, MMMM Do YYYY");
    },


    fetchUser: function(){
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        var userData = data.results[0];
        console.log(userData);
        this.userPicture = userData.picture.medium;
        this.userName = userData.name.first + " " + userData.name.last;
        this.userCountry = userData.location.country;
        this.userBirthdate = userData.dob.date;
        this.userAge = userData.dob.age;
        this.userEmail = userData.email;

      });
    }
  }
})
