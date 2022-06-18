import { ISampleData } from "../interfaces";

export const sampleData: {[chainName: string]: ISampleData} = {
  cosmoshub: {
    userAddress: "cosmos147y7z4gdjhrj3exmc260dmzn8ql8f7dnkereju",
    transactionHash: {
      send: "1984444F03842326E29FBD2FDCDAA9FED111A1C211DAB7DBD99136B9582E377D",
      fail: "",
      delegate: "AA5B24070C7B36340E377900292737266CC88591246EF664A7851EE0449755FD",
      undelegate: "C5A179FB33236394329F54E2EBD994CE90FC59120AEF49C4A9F26A5D4B953CCF",
      redelegate: "C92DC38E6473FADA9BED9E9322E2AB5E9E08641886773A0B65369CED9363FA80",
      getReward: "9DAB748BE9CDC1797DD20DB192F6A86B2678428F6FD9F4D8AF559410B555FBB3",
      vote: "0E52235AC7925D43919A7DEB309509C066F2FF3CE391261BE86599951BAD8B73",
      ibcTransfer: "C4380E501DC8A6E11247E71C07741AFFBC0477242ECD6EBCCCB3734D13A1FD78",
      ibcReceived: "9132F272B70BCC2B493AC25C55923C3A6CE9F4546A53410CAEE7565B8A964A61",
      ibcAcknowledgement: "84856E87D2A4C003CB2F2ED32FAE79F4B68222B9A31E10AE44029AB55C88949F",
    },
    delegatorAddress: "cosmos1vvwtk805lxehwle9l4yudmq6mn0g32pxqjlrmt",
    validatorAddress: "cosmosvaloper1vvwtk805lxehwle9l4yudmq6mn0g32px9xtkhc",
  },
  cryptoorgchain: {
    userAddress: "cro1nnem6szhs57lanxqcljw868fyen3ktvwgglad6",
    transactionHash: {
      send: "23E62FE72537AC1FDFCB3AB84F54D9FE8D372A19B380C81BB49D6E80904369AD",
      fail: "BA13107B38CFD15F951C0CA7FDA3BF859BE83BB8EDDC869F8144EE81EC65A347",
      delegate: "DAD56DB82717E8C99A03523ACF5353ABF5B6F434909C5F3C8056643A61033417",
      undelegate: "",
      redelegate: "",
      getReward: "1845DD281934FA79FEEC14F7537E8053866F6930C59FFAC8252D6C60BDC3C279",
      vote: "ED3C12DA95A6D97ACD9399FBA6334C7651E9504FA8FD36EF07C4AB9261F7004F",
      ibcTransfer: "29E9E0AF6FCF70CC5375DFF5F4E8A4B6F365A9544DC89AB6661324F0B989E2EE",
      ibcReceived: "551020E324484883A4C817EBE8165ABB068DEFED08975A97B08F8FB2778280C6",
      ibcAcknowledgement: "6B787486DDBC5BE196204DA1DB3A41E1FD2763AC73F5F63D235BCE840FE71B6A",
      mintNFT: "8C12D6D975BA4222761C2534605D603D40CA0EC98E738E2F6993B7BC3919BDB8",
      transferNFT: "9185B165056BB72D2D054A4B2F45E57C749D775A1052DDBCAB27298015A3F722",
      issueDenom: "09810F1DEF9D529CF4B9615D390C86F04D40F18937E27EA8D47725926E31876B",
    },
    delegatorAddress: "cro14jsw39n2aywkz8c2n487y0747raee7la0sqp56",
    validatorAddress: "crocncl1up7anp4cq0kc799dccgfhesxp0mxklgrpgf856",
  },
  cronos: {
    userAddress: "cro1nnem6szhs57lanxqcljw868fyen3ktvwgglad6",
    transactionHash: {
      send: "",
    },
    delegatorAddress: "cro14jsw39n2aywkz8c2n487y0747raee7la0sqp56",
    validatorAddress: "crocncl1up7anp4cq0kc799dccgfhesxp0mxklgrpgf856",
  },
};