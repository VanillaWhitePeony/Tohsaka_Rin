import assert from 'node:assert/strict';
import test from 'node:test';
import { POST_ACTIONS_DEFAULTS } from '../config/post-actions';
import {
  getLocalEditorHref,
  getPostSourceFilename,
  getPostSourcePath,
  isPostSourceEnabled,
  isPostSourcePublic,
} from './post-source';

test('password posts never expose their source', () => {
  assert.equal(isPostSourcePublic({ password: 'secret' }, '', false), false);
  assert.equal(isPostSourcePublic({ password: 'secret' }, '', true), false);
});

test('posts with encrypted blocks never expose their source', () => {
  const block = ['正文', '', ':::encrypted{password="koharu"}', '秘密', ':::'].join('\n');
  assert.equal(isPostSourcePublic({}, block, false), false);
  assert.equal(isPostSourcePublic({}, '  ::::encrypted{password="x"}\n:::', true), false);
  assert.equal(isPostSourcePublic({}, '提到 :::encrypted 语法的正文', true), true);
  assert.equal(isPostSourcePublic({}, undefined, true), true);
});

test('drafts are public only outside production', () => {
  assert.equal(isPostSourcePublic({ draft: true }, '', false), true);
  assert.equal(isPostSourcePublic({ draft: true }, '', true), false);
  assert.equal(isPostSourcePublic({ draft: false }, '', true), true);
  assert.equal(isPostSourcePublic({}, '', true), true);
  assert.equal(isPostSourcePublic({ password: '' }, '', true), true);
});

test('the endpoint exists only when some action reads it', () => {
  const off = { copyMarkdown: false, downloadMarkdown: false };
  assert.equal(isPostSourceEnabled(POST_ACTIONS_DEFAULTS), true);
  assert.equal(isPostSourceEnabled(off), false);
  assert.equal(isPostSourceEnabled({ ...off, copyMarkdown: true }), true);
  assert.equal(isPostSourceEnabled({ ...off, downloadMarkdown: true }), true);
});

test('source path appends .md to the post path', () => {
  assert.equal(getPostSourcePath('/post/note/foo'), '/post/note/foo.md');
  assert.equal(getPostSourcePath('/en/post/foo/'), '/en/post/foo.md');
});

test('filename uses the last slug segment', () => {
  assert.equal(getPostSourceFilename('note/front-end/theme'), 'theme.md');
  assert.equal(getPostSourceFilename('随笔/春天'), '春天.md');
  assert.equal(getPostSourceFilename('a:b?c'), 'a-b-c.md');
  assert.equal(getPostSourceFilename(''), 'post.md');
});

test('local editor href joins project, content dir and post file', () => {
  const href = getLocalEditorHref(
    { urlTemplate: 'vscode://file{path}' },
    { localProjectPath: '/Users/me/blog/', contentRelativePath: '/src\\content\\blog/' },
    '\\note\\foo.md',
  );
  assert.equal(href, 'vscode://file/Users/me/blog/src/content/blog/note/foo.md');
});
