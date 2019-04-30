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

const createId = () => "hoge";

export const addTips = (
  tipsRepositoryPort: TipsRepositoryPort,
  message: string
) => {
  tipsRepositoryPort.save(createId(), message);
};

// export const updateTips = (id: string, message: string)
