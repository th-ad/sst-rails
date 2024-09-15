import { vpc } from "./cluster";

export const database = new sst.aws.Postgres("Postgres", { vpc });
