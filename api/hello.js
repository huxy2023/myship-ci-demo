export async function GET(request, context) {
  return {
    ok: true,
    channel: "pr-preview-v2",
    project: context.project,
    subdomain: context.subdomain,
    deploymentId: context.deploymentId,
  };
}
