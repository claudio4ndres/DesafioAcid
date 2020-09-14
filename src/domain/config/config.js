class Config {
    static instance;
  
    constructor(){
      if(this.instance){
        return this.instance;
      }  
      this.setConfig();
      this.instance = this;
    }

    setConfig(){       
        this.BASE_URL_API = "https://graphqlzero.almansi.me/";
    }
  
  }

  export default new Config();