import { Button } from '@mui/material';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, TransactionSignature } from '@solana/web3.js';
import { FC, useCallback } from 'react';

export const RequestAirdrop: FC = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    const onClick = useCallback(async () => {
        if (!publicKey) {
            return;
        }

        let signature: TransactionSignature = '';
        try {
            signature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);

            await connection.confirmTransaction(signature, 'processed');
        } catch (error: any) {
        }
    }, [publicKey, connection]);

    return (
        <button onClick={onClick} disabled={!publicKey}>
            Request Airdrop
        </button>
    );
};
