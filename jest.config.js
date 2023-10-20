export default {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
