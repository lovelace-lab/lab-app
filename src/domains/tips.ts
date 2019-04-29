export interface Tips {
  id: string;
  message: string;
}

export interface TipsPort {
  save: (id: string, message: string) => Promise<void>;
  findById: (id: string) => Promise<Tips>;
  findAll: () => Promise<Tips[]>;
}

const createId = () => "hoge";

export const createTips = (tipsPort: TipsPort) => {
  const tips: Tips = { id: createId(), message: '' };
  tipsPort.save(tips.id, tips.message);
};

// export const updateTips = (id: string, message: string)
