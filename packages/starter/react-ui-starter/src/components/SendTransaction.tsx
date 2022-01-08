import { Button } from '@mui/material';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction, TransactionSignature } from '@solana/web3.js';
import { FC, useCallback } from 'react';
// import { Notification } from './Notification';
// import toast, { Toaster } from 'react-hot-toast';

export const SendTransaction: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    // const onClick = useCallback(async () => {
    //     if (!publicKey) {
    //         // toast.custom(
    //         //     <Notification
    //         //         message='Wallet not connected!'
    //         //         variant="error"
    //         //     />
    //         // );
    //         return;
    //     }

    //     let signature: TransactionSignature = '';
    //     try {
    //         const transaction = new Transaction().add(
    //             SystemProgram.transfer({
    //                 fromPubkey: publicKey,
    //                 toPubkey: Keypair.generate().publicKey,
    //                 lamports: 1,
    //             })
    //         );

    //         signature = await sendTransaction(transaction, connection);
    //         // toast.custom(
    //         //     <Notification
    //         //         message={`Transaction sent: ${signature}`}
    //         //         variant="info"
    //         //     />
    //         // );

    //         await connection.confirmTransaction(signature, 'processed');
    //         // toast.custom(
    //         //     <Notification
    //         //         message={`Transaction successful: ${signature}`}
    //         //         variant="info"
    //         //     />
    //         // );
    //     } catch (error: any) {
    //         // toast.custom(
    //         //     <Notification
    //         //         message={`Transaction failed: ${error?.message}`}
    //         //         variant="info"
    //         //     />
    //         // );
    //         return;
    //     }
    // }, [publicKey, connection, sendTransaction]);

    // return (
    //     <Button variant="contained" color="secondary" onClick={onClick} disabled={!publicKey}>
    //         Send Transaction (devnet)
    //     </Button>
    // );
    return (
        <Button variant="contained" color="secondary" disabled={!publicKey}>
            Send Transaction (devnet)
        </Button>
    );
};
