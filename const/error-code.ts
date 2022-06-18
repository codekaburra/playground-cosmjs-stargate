/*
* https://docs.cosmos.network/master/building-modules/errors.html
* */
export enum ErrorCode {
    ErrEmptyDelegatorAddr = 2, // delegator address is empty
    ErrEmptyWithdrawAddr = 3, // withdraw address is empty
    ErrEmptyValidatorAddr = 4, // validator address is empty
    ErrEmptyDelegationDistInfo = 5, // no delegation distribution info
    ErrNoValidatorDistInfo = 6, // no validator distribution info
    ErrNoValidatorCommission = 7, // no validator commission to withdraw
    ErrSetWithdrawAddrDisabled = 8, // set withdraw address disabled
    ErrBadDistribution = 9, // community pool does not have sufficient coins to distribute
    ErrInvalidProposalAmount = 10, // invalid community pool spend proposal amount
    ErrEmptyProposalRecipient = 11, // invalid community pool spend proposal recipient
    ErrNoValidatorExists = 12, // validator does not exist
    ErrNoDelegationExists = 13, // delegation does not exist
}
