import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
    getPhantomWallet,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import React, { FC, useCallback, useMemo } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Navigation } from './Navigation';
import { Notification } from './Notification';
import { SendOneLamportToRandomAddress } from './SendOneLamportToRandomAddress';
import { RequestAirdrop } from './RequestAirdrop';

export const Wallet: FC = () => {
    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
    const network = WalletAdapterNetwork.Testnet;

    // You can also provide a custom RPC endpoint
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    
    const wallets = [
        /* view list of available wallets at https://github.com/solana-labs/wallet-adapter#wallets */
        getPhantomWallet()
    ]

    const onError = useCallback(
        (error: WalletError) =>
            toast.custom(
                <Notification
                    message={error.message ? `${error.name}: ${error.message}` : error.name}
                    variant="error"
                />
            ),
        []
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} onError={onError} autoConnect>
                <WalletModalProvider>
                    <Navigation />
                    <SendOneLamportToRandomAddress />
                    <RequestAirdrop />
                </WalletModalProvider>
                <Toaster position="bottom-left" reverseOrder={false} />
            </WalletProvider>
        </ConnectionProvider>
    );
};
