import { defineConfig } from 'vite-plus';

const ignoredOutputs = [
    '!.next',
    '!.next/**',
    '!out',
    '!out/**',
    '!build',
    '!build/**',
    '!node_modules',
    '!node_modules/**',
];

export default defineConfig({
    run: {
        cache: { tasks: true, scripts: false },
        tasks: {
            'app:check': {
                command: ['vp check', 'tsc --noEmit'],
                input: [{ auto: true }, ...ignoredOutputs],
            },
            'app:typecheck': {
                command: 'tsc --noEmit',
                input: [{ auto: true }, ...ignoredOutputs],
            },
            'app:lint': {
                command: 'vp lint',
                input: [{ auto: true }, ...ignoredOutputs],
            },
            'app:format': {
                command: 'vp fmt',
                input: [{ auto: true }, ...ignoredOutputs],
            },
            'next:build': {
                command: 'next build',
                env: ['GITHUB_TOKEN', 'NODE_ENV', 'NEXT_*', 'VERCEL', 'VERCEL_*'],
                input: [{ auto: true }, ...ignoredOutputs],
                output: [{ pattern: '.next/**', base: 'workspace' }],
            },
        },
    },
    staged: {
        '*': 'vp check --fix',
    },
    fmt: {
        singleQuote: true,
        semi: true,
        tabWidth: 4,
        trailingComma: 'es5',
        ignorePatterns: ['.next/**', 'out/**', 'build/**', 'node_modules/**'],
    },
    lint: {
        plugins: ['react', 'jsx-a11y', 'nextjs'],
        ignorePatterns: ['.next/**', 'out/**', 'build/**', 'node_modules/**', 'next-env.d.ts'],
        options: {
            typeAware: true,
            typeCheck: true,
        },
    },
    test: {
        include: [],
    },
});
