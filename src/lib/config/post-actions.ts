export interface ResolvedPostActionsConfig {
  copyMarkdown: boolean;
  downloadMarkdown: boolean;
}

export const POST_ACTIONS_DEFAULTS: ResolvedPostActionsConfig = {
  copyMarkdown: true,
  downloadMarkdown: true,
};

export function normalizePostActionsConfig(raw: unknown): ResolvedPostActionsConfig {
  if (raw === undefined || raw === null) return { ...POST_ACTIONS_DEFAULTS };
  if (typeof raw !== 'object' || Array.isArray(raw)) {
    throw new Error('Post actions configuration error: "postActions" must be an object.');
  }
  const source = raw as Record<string, unknown>;
  for (const key of ['copyMarkdown', 'downloadMarkdown'] as const) {
    if (source[key] !== undefined && typeof source[key] !== 'boolean') {
      throw new Error(`Post actions configuration error: "${key}" must be a boolean.`);
    }
  }
  return {
    copyMarkdown: (source.copyMarkdown as boolean | undefined) ?? POST_ACTIONS_DEFAULTS.copyMarkdown,
    downloadMarkdown: (source.downloadMarkdown as boolean | undefined) ?? POST_ACTIONS_DEFAULTS.downloadMarkdown,
  };
}
