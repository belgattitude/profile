import create from 'zustand';

export interface MeetUiState {
  videoEmbedStatus: 'open' | 'closed';
  openVideoEmbed: () => void;
  closeVideoEmbed: () => void;
}

export const useStore = create<MeetUiState>()((set) => ({
  videoEmbedStatus: 'closed',
  openVideoEmbed: () => set(() => ({ videoEmbedStatus: 'open' })),
  closeVideoEmbed: () => set(() => ({ videoEmbedStatus: 'closed' })),
}));
