import Api from "../utils/Api";
import Config from "../config/Config";

class FiltroDeData {
  constructor() {
    this.api = new Api({ url: Config.BASE_URL_API });
    this.api.createEntity({ name: "api" });
  }

  iniciarFiltro(params) {
    return this.api.endpoints.api
      .create(params)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }
}

export default FiltroDeData;