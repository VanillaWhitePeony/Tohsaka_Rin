import { friendsIntro } from '@constants/friends-config';
import { cn } from '@lib/utils';
import { defaultLocale, t } from '@/i18n';
import SakuraSVG from '../svg/SakuraSvg';

const LABEL_CLASS = 'mb-1.5 block font-bold text-muted-foreground text-xs uppercase tracking-wide';
const INPUT_CLASS =
  'rounded-xl border-2 border-border bg-muted/40 px-4 py-2.5 font-bold text-foreground text-sm transition-all placeholder:text-muted-foreground/70 focus:border-primary/50 focus:bg-background focus:outline-none focus:ring-4 focus:ring-primary/15';

interface Props {
  locale?: string;
}

export default function FriendRequestForm({ locale }: Props) {
  const translate = (key: Parameters<typeof t>[1]) => t(locale ?? defaultLocale, key);
  const initialPreview = `site: ${translate('friends.sitePlaceholder')}
url: https://example.com
owner: ${translate('friends.ownerPlaceholder')}
desc: ${translate('friends.descPlaceholder')}
image: https://example.com/avatar.jpg
color: "#ffc0cb"`;

  return (
    <div
      className="mb-4 w-full"
      data-friend-request-form
      data-site-placeholder={translate('friends.sitePlaceholder')}
      data-owner-placeholder={translate('friends.ownerPlaceholder')}
      data-desc-placeholder={translate('friends.descPlaceholder')}
      data-copy-label={translate('friends.copyConfig')}
      data-copy-success={translate('friends.copiedConfig')}
      data-copy-failure={translate('friends.copyFail')}
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm md:p-3">
        {/* Cute Corner Decor */}
        <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/10" />
        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/5" />

        <div className="grid grid-cols-2 gap-12 md:grid-cols-1 md:gap-8">
          {/* Left Side: Form */}
          <div className="relative z-10">
            <div className="mb-6">
              <h2 className="mb-2 flex items-center gap-2 font-black text-2xl text-foreground">
                <SakuraSVG className="size-6 animate-spin text-[#FFC0CB] duration-10000" />
                {translate('friends.applyTitle')}
              </h2>
              {friendsIntro.applyDesc && <p className="font-medium text-muted-foreground text-sm">{friendsIntro.applyDesc}</p>}
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="group relative">
                  <label htmlFor="friend-site" className={LABEL_CLASS}>
                    {translate('friends.siteName')}
                  </label>
                  <input
                    id="friend-site"
                    type="text"
                    name="site"
                    className={cn(INPUT_CLASS, 'w-full')}
                    placeholder={translate('friends.sitePlaceholder')}
                  />
                </div>
                <div className="group relative">
                  <label htmlFor="friend-owner" className={LABEL_CLASS}>
                    {translate('friends.ownerName')}
                  </label>
                  <input
                    id="friend-owner"
                    type="text"
                    name="owner"
                    className={cn(INPUT_CLASS, 'w-full')}
                    placeholder={translate('friends.ownerPlaceholder')}
                  />
                </div>
              </div>

              <div className="group relative">
                <label htmlFor="friend-url" className={LABEL_CLASS}>
                  {translate('friends.siteUrl')}
                </label>
                <input
                  id="friend-url"
                  type="url"
                  name="url"
                  className={cn(INPUT_CLASS, 'w-full')}
                  placeholder="https://your-site.com"
                />
              </div>

              <div className="group relative">
                <label htmlFor="friend-desc" className={LABEL_CLASS}>
                  {translate('friends.siteDesc')}
                </label>
                <textarea
                  id="friend-desc"
                  name="desc"
                  rows={2}
                  className={cn(INPUT_CLASS, 'w-full resize-none')}
                  placeholder={translate('friends.descPlaceholder')}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="group relative">
                  <label htmlFor="friend-image" className={LABEL_CLASS}>
                    {translate('friends.avatarUrl')}
                  </label>
                  <input
                    id="friend-image"
                    type="url"
                    name="image"
                    className={cn(INPUT_CLASS, 'w-full')}
                    placeholder="https://..."
                  />
                </div>
                <div className="group relative">
                  <label htmlFor="friend-color" className={LABEL_CLASS}>
                    {translate('friends.themeColor')}
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl border-2 border-border shadow-sm transition-transform hover:scale-105">
                      <input
                        id="friend-color"
                        type="color"
                        name="color"
                        defaultValue="#ffc0cb"
                        className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] cursor-pointer p-0"
                      />
                    </div>
                    <input
                      aria-label={translate('friends.themeColor')}
                      type="text"
                      defaultValue="#ffc0cb"
                      data-friend-color-text
                      className={cn(INPUT_CLASS, 'flex-1')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Preview / Code */}
          <div className="relative flex flex-col justify-center rounded-xl bg-muted/60 p-6 md:p-3">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold text-xl uppercase tracking-wider">{translate('friends.previewTitle')}</h3>
              <button
                type="button"
                data-friend-copy
                disabled
                className="group relative px-3 py-2 font-bold text-base text-foreground transition-transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 rotate-[1deg] rounded-lg border-2 border-foreground border-dashed transition-all group-hover:rotate-0"></div>
                <span data-friend-copy-text>{translate('friends.copyConfig')}</span>
              </button>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-xl border-2 border-border bg-background p-4">
              <pre data-friend-preview className="whitespace-pre-wrap font-mono text-foreground/80 text-xs leading-relaxed">
                {initialPreview}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
