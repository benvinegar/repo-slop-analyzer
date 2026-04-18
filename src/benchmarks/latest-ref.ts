export interface LatestDefaultBranchRef {
  defaultBranch: string;
  ref: string;
}

/**
 * Parse `git ls-remote --symref <repo-url> HEAD` output so the rolling-history job can
 * discover the current default branch and its HEAD SHA without calling the GitHub API.
 */
export function parseLsRemoteDefaultBranch(output: string): LatestDefaultBranchRef {
  const lines = output
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const branchLine = lines.find((line) => line.startsWith("ref:"));
  const headLine = lines.find((line) => /\bHEAD$/.test(line) && !line.startsWith("ref:"));

  const branchMatch = branchLine?.match(/^ref:\s+refs\/heads\/(.+)\s+HEAD$/);
  const headMatch = headLine?.match(/^([0-9a-f]{7,40})\s+HEAD$/);

  if (!branchMatch?.[1] || !headMatch?.[1]) {
    throw new Error(`Unable to parse default-branch ref from ls-remote output:\n${output}`);
  }

  return {
    defaultBranch: branchMatch[1],
    ref: headMatch[1],
  };
}
