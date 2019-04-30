export interface Tips {
  id: string;
  message: string;
}

export interface TipsRepositoryPort {
  // データを保存するためのポート、Repositoryパターン
  save: (id: string, message: string) => Promise<void>;
  findById: (id: string) => Promise<Tips>;
  findAll: () => Promise<Tips[]>;
}

export interface TipsPort {
  setAllTips: (allTips: Tips[]) => void;
}

export type Port = Partial<TipsRepositoryPort | TipsPort>

const createId = () => "hoge";

export const addTips = (
  tipsRepositoryPort: TipsRepositoryPort,
  message: string
) => {
  tipsRepositoryPort.save(createId(), message);
};

export const fetchAllTips = async (
  tipsRepositoryPort: TipsRepositoryPort,
  tipsPort: TipsPort
) => {
  const allTips = await tipsRepositoryPort.findAll();
  tipsPort.setAllTips(allTips);
};



// export const updateTips = (id: string, message: string)
