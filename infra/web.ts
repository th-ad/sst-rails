import { cluster } from "./cluster";
import { database } from "./database";

const railsMasterKey = new sst.Secret("RailsMasterKey");

cluster.addService("Web", {
  image: {
    context: "./packages/web",
  },
  link: [database],
  public: {
    ports: [{ listen: "80/http", forward: "3000/http" }]
  },
  dev: {
    command: "bin/rails s"
  },
  environment: {
    RAILS_LOG_LEVEL: "debug",
    RAILS_MASTER_KEY: railsMasterKey.value,
  },
});
