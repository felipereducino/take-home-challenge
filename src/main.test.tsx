describe('expect true to be true', () => {
    it('should be true', () => {
        expect(true).toBe(true)
        expect('ola mundo').toBe('ola mundo')
    })
    it('should be ola mundo string', () => {
        expect('ola mundo').toBe('ola mundo')
    })
})
