// 类型, 池子， 锁仓/交易额, 日化
const coins = [
  {
    pid: 0,
    lpAddresses: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'WHT',
    islp: false
  },
  {
    pid: 1,
    lpAddresses: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'HBTC',
    islp: false
  },
  {
    pid: 2,
    lpAddresses: '0x0298c2b32eae4da002a15f36fdf7615bea3da047', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0x0298c2b32eae4da002a15f36fdf7615bea3da047', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'HUSD',
    islp: false
  },
  {
    pid: 3,
    lpAddresses: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'ETH',
    decimal: 18,
    islp: false
  },
  {
    pid: 4,
    lpAddresses: '0xa71edc38d189767582c38a3145b5873052c3e47a', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0xa71edc38d189767582c38a3145b5873052c3e47a', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'USDT',
    islp: false
  },
  {
    pid: 5,
    lpAddresses: '0xef3cebd77e0c52cb6f60875d9306397b5caca375', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0xef3cebd77e0c52cb6f60875d9306397b5caca375', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'HBCH',
    islp: false
  },
  {
    pid: 6,
    lpAddresses: '0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'HDOT',
    islp: false
  },
  {
    pid: 7,
    lpAddresses: '0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'HLTC',
    islp: false
  },
  {
    pid: 8,
    lpAddresses: '0xFBe7b74623e4be82279027a286fa3A5b5280F77c', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'HBTC/USDT',
    islp: true
  },
  {
    pid: 9,
    lpAddresses: '0x78C90d3f8A64474982417cDB490E840c01E516D4', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'ETH/USDT',
    islp: true
  },
  {
    pid: 10,
    lpAddresses: '0xdff86B408284dff30A7CAD7688fEdB465734501C', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0x0298c2b32eae4da002a15f36fdf7615bea3da047', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'HUSD/USDT',
    islp: true
  },
  {
    pid: 11,
    lpAddresses: '0x060B4bfcE16D15A943ec83C56C87940613e162eB', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'HLTC/USDT',
    islp: true
  },
  {
    pid: 12,
    lpAddresses: '0x1f0eC8e0096e145f2bf2Cb4950Ed7b52d1cbd35f', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0xef3cebd77e0c52cb6f60875d9306397b5caca375', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'HBCH/USDT',
    islp: true
  },
  {
    pid: 13,
    lpAddresses: '0x5484ab0DF3E51187f83F7f6b1a13f7a7Ee98C368', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'HDOT/USDT',
    islp: true
  },
  {
    pid: 14,
    lpAddresses: '0x600072aF0470d9Ed1D83885D03d17368943fF22A', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0xae3a768f9ab104c69a7cd6041fe16ffa235d1810', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'HFIL/USDT',
    islp: true
  },
  {
    pid: 16,
    lpAddresses: '0x615E6285c5944540fd8bd921c9c8c56739Fd1E13', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'MDX/USDT',
    islp: true
  },
  {
    pid: 15,
    lpAddresses: '0x3375afF2CAcF683b8FC34807B9443EB32e7Afff6', // lpAddresses 统一用来查询余额，lp的话填写lp地址，单币的填币种地址
    tokenAddresses: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', // tokenAddresses,单币的话不需要，lp填要获取价格的币种地址
    symbol: 'WHT/HUSD',
    islp: true
  },
]
const hecoAddress = 'https://http-mainnet-node.huobichain.com'

const web3 = require('web3')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./apy.json')
const db = low(adapter)
//address
const oracleAddress = '0x7b4B0d9Cd226017eA3875D49196Ea63A6ea8C278'
const usdtAddress = '0xa71edc38d189767582c38a3145b5873052c3e47a'
const chefAddress = '0xFB03e11D93632D97a8981158A632Dd5986F5E909'
const mdxAddress = '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c'
//abi
const erc20Abi = require('./abi/erc20.json')
const oracleAbi = require('./abi/oracle.json')
const chefAbi = require('./abi/masterchef.json')
// contract
const provider = new web3(hecoAddress)
const orcalContract = new provider.eth.Contract(oracleAbi, oracleAddress)
const chefContract = new provider.eth.Contract(chefAbi, chefAddress)
//
const BLOCKS_PER_YEAR = 10512000
const SUSHI_PER_BLOCK = 40

const getPoolWeight = async (pid) => {
  const { allocPoint } = await chefContract.methods.poolInfo(pid).call();
  const totalAllocPoint = await chefContract.methods
      .totalAllocPoint()
      .call();
  return allocPoint/totalAllocPoint;
};

const calculateCoin = async(lpAddresses, tokenSymbol, pid) => {
  const tokenContract = new provider.eth.Contract(erc20Abi, lpAddresses)
  const totalValue = await tokenContract.methods.balanceOf(chefAddress).call() 
  const decimal = await tokenContract.methods.decimals().call()
  if(tokenSymbol == 'USDT') {
    return {
      totalUsdtValue: totalValue/Math.pow(10, decimal),
      tokenPriceInWeth: 1,
      poolWeight: await getPoolWeight(pid)
    }
  } else {
    let price = 0
    try {
      price = await orcalContract.methods.consult(lpAddresses, String(Math.pow(10, decimal)), usdtAddress).call()
    } catch (error) {
      console.log(tokenSymbol, 'get price', error)
    }
    return {
      totalUsdtValue: totalValue/Math.pow(10, decimal)*price/Math.pow(10, decimal),
      tokenPriceInUsdt: price/Math.pow(10, decimal),
      poolWeight: await getPoolWeight(pid)
    }
  }
}

const calculateLp = async(lpAddresses, tokenAddresses, tokenSymbol, pid) => {
  const currentTokenContract = new provider.eth.Contract(erc20Abi, lpAddresses)
  const currentLpContract = new provider.eth.Contract(erc20Abi, tokenAddresses)
  const totalSupply = await currentTokenContract.methods.totalSupply().call()
  // chef的总量
  const balance = await currentTokenContract.methods.balanceOf(chefAddress).call()
  const decimal = await currentLpContract.methods.decimals().call()
  let price = 0
  try {
      price = await orcalContract.methods.consult(tokenAddresses, String(decimal*Math.pow(10, decimal)), usdtAddress).call()
  } catch (error) {
      console.log(tokenSymbol, 'get price', error)
  }
  const tokenAmount = await currentLpContract.methods.balanceOf(currentTokenContract.options.address).call()
  //份额
  const portionLp = balance/totalSupply
  const totalAmount = tokenAmount*portionLp/Math.pow(10, decimal)
  const poolWeight = await getPoolWeight(pid)
  return {
      totalUsdtValue: totalAmount*price/Math.pow(10, decimal)*2,
      tokenPriceInUsdt: price/Math.pow(10, decimal),
      poolWeight
    }
}

const getCoinsInfo = async() => {
  const mdxPrice = await orcalContract.methods.consult(mdxAddress, String(Math.pow(10, 18)), usdtAddress).call()
  db.set('single', []).write()
  db.set('lps', []).write()
  for(const coin of coins) {
    let res = null
    if(coin.islp) {
      res = await calculateLp(coin.lpAddresses, coin.tokenAddresses, coin.symbol, coin.pid)
    } else {
      res = await calculateCoin(coin.lpAddresses, coin.symbol, coin.pid)
    }
    const apy = mdxPrice/1e+18*SUSHI_PER_BLOCK*BLOCKS_PER_YEAR*res.poolWeight/res.totalUsdtValue*100
    if(coin.islp) {
      db.get('lps').push({...res, symbol: coin.symbol, apy}).write()
    } else {
      db.get('single').push({...res, symbol: coin.symbol, apy}).write()
    }
  }
}
getCoinsInfo()


//
const axios = require('axios')
const API_URL = 'https://api.mdex.com'
const moment = require('moment'); // require
const tokens = {
  '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047': 'HUSD',
  '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F': 'HT',
  '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD': 'ETH',
  '0xa71EdC38d189767582C38A3145b5873052c3e47a': 'USDT',
  '0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa': 'HBTC',
  '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c': 'MDX',
  '0xa042fb0e60125A4022670014AC121931e7501Af4': 'BAG',
  '0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3': 'HDOT',
  '0xecb56cf772B5c9A6907FB7d32387Da2fCbfB63b4': 'HLTC',
  '0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375': 'HBCH'
}
const getApy = async() => {
  const list = await axios.get(`${API_URL}/pool/list`)
  const apys = await axios.get(`${API_URL}/pool/apys`)
  if(list.data.code == 0 && apys.data.code == 0) {
    db.set('minging', []).write()
    list.data.result.forEach(val => {
      db.get('minging').push({...val, apy: apys.data.result[val.pool_id], symbol0: tokens[val.token0], symbol1: tokens[val.token1]}).write()
    })
    const time = new Date().getTime()
    db.set('time', moment(time).utcOffset(8).format('YYYY-MM-DD HH:mm')).write()
  }
}
getApy()