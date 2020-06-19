import { getCurrencies } from "./getCurrencies"

describe('greeet', () => {
    it('should returtn the supported currencies ', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
})