const vpc = new sst.aws.Vpc("SST Rails");
export const postgres = new sst.aws.Postgres("SST Rails", { vpc });
