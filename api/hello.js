export async function GET(request, context) {
  return {
    ok: true,
    channel: "production-main-v1",
    project: context.project,
    subdomain: context.subdomain,
    deploymentId: context.deploymentId,
  };
}
