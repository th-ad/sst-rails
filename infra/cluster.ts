export const vpc = new sst.aws.Vpc("Vpc", { nat: "managed" });
export const cluster = new sst.aws.Cluster("Cluster", { vpc });
