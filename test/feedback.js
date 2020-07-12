const SocialNetwork = artifacts.require('./SocialNetwork.sol')

require('chai')
	.use(require('chai-as-promised'))
	.should()

contract('SocialNetwork', ([deployer,student]) => {
	let socialNet 

	describe('deployment', async () => {
		it('deploys successfully', async () => {
			socialNet = await SocialNetwork.deployed()
			const address = await socialNet.address
			assert.notEqual(address, 0x0)
			assert.notEqual(address,'')
			assert.notEqual(address,null)
			assert.notEqual(address,undefined)
		})
	})

	describe('posts', async () => {

		let result1,result2,postCount

		it('created posts',async () => {
			
			result2 = await  socialNet.createPost('This is first','1','2')
			postCount = await socialNet.postCount()

			assert.equal(postCount,1)
			const event = result2.logs[0].args
			console.log(event)
		})

		it('lists posts',async () => {
			//console.log(result1)
			console.log(result2)
		})
	})
})	