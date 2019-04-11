export const helloResolver = {
    hello: async (_obj: any, { name }: any, _context: any, _info: any) => `Hello ${name}!`
};