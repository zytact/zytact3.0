const config = {
    '*.{js,jsx,mjs,cjs,ts,tsx}': ['eslint --fix', 'prettier --write'],
    '*.{css,json,jsonc,md,mdx,yaml,yml}': 'prettier --write',
};

export default config;
