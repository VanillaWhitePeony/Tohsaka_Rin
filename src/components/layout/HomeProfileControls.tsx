import ThemeToggle from '@components/theme/ThemeToggle';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

interface HomeProfileControlsProps {
  locale: string;
}

interface MusicPlayer {
  id: string;
  title: string;
}

const MUSIC_PLAYERS: Record<1 | 2, readonly [MusicPlayer, ...MusicPlayer[]]> = {
  1: [{ id: '1919347371', title: '恋爱吧魔法少女 伴奏' }],
  2: [{ id: '1451998397', title: '恋爱吧 魔法少女 hanser' }],
};

function pickRandomPlayer(players: readonly [MusicPlayer, ...MusicPlayer[]]): MusicPlayer {
  return players[Math.floor(Math.random() * players.length)] ?? players[0];
}

export default function HomeProfileControls({ locale }: HomeProfileControlsProps) {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [musicState, setMusicState] = useState<0 | 1 | 2>(0);
  const [player, setPlayer] = useState<MusicPlayer | null>(null);

  const switchMusic = () => {
    const nextState = ((musicState + 1) % 3) as 0 | 1 | 2;
    setMusicState(nextState);
    setPlayer(nextState === 0 ? null : pickRandomPlayer(MUSIC_PLAYERS[nextState]));
  };

  return (
    <div className="home-profile-controls" data-home-profile-controls>
      <LanguageSwitcher locale={locale} open={languageOpen} onOpenChange={setLanguageOpen} />
      <ThemeToggle locale={locale} />
      <button
        className="home-music-toggle size-12 flex-center cursor-pointer rounded-full transition-[background-color,color,scale] duration-200 ease-out-quart hover:bg-current/15 active:scale-90"
        data-music-state={musicState}
        type="button"
        aria-label="音乐播放切换"
        aria-pressed={musicState !== 0}
        title="音乐播放切换"
        onClick={switchMusic}
      >
        <Icon icon="ri:music-2-line" className="size-8" />
      </button>
      {player && (
        <iframe
          key={player.id}
          className="home-music-player"
          title={player.title}
          src={`https://music.163.com/outchain/player?type=2&id=${player.id}&auto=0&height=66`}
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </div>
  );
}
