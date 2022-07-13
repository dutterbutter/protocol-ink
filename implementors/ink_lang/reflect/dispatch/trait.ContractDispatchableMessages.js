(function() {var implementors = {};
implementors["governed_token_wrapper"] = [{"text":"impl ContractDispatchableMessages&lt;/// The contract storage\n    #[ink(storage)]\n    #[derive(SpreadAllocate, PSP22Storage, PSP22WrapperStorage, PSP22MetadataStorage)]\n    pub struct GovernedTokenWrapper {\n        #[PSP22StorageField]\n        psp22: PSP22Data,\n        #[PSP22MetadataStorageField]\n        metadata: PSP22MetadataData,\n        #[PSP22WrapperStorageField]\n        wrapper: PSP22WrapperData,\n\n        /// The contract governor\n        governor: AccountId,\n        /// The address of the fee recipient\n        fee_recipient: AccountId,\n        /// The percentage fee for wrapping\n        fee_percentage: Balance,\n        /// To determine if native wrapping is allowed\n        is_native_allowed: bool,\n        /// The contract wrapping limit\n        wrapping_limit: Balance,\n        /// The nonce for adding/removing address\n        proposal_nonce: u64,\n        /// Map of token addresses\n        tokens: Mapping&lt;AccountId, bool&gt;,\n        /// Map of historical token addresses\n        historical_tokens: Mapping&lt;AccountId, bool&gt;,\n        /// Map of tokens that are valid\n        valid: Mapping&lt;AccountId, bool&gt;,\n        /// Map of tokens that are historically valid\n        historically_valid: Mapping&lt;AccountId, bool&gt;,\n    }&gt; for <a class=\"struct\" href=\"governed_token_wrapper/governed_token_wrapper/struct.GovernedTokenWrapper.html\" title=\"struct governed_token_wrapper::governed_token_wrapper::GovernedTokenWrapper\">GovernedTokenWrapper</a>","synthetic":false,"types":["governed_token_wrapper::governed_token_wrapper::GovernedTokenWrapper"]}];
implementors["mixer"] = [{"text":"impl ContractDispatchableMessages&lt;#[derive(SpreadAllocate)]\n    pub struct Mixer {\n        deposit_size: Balance,\n        merkle_tree: merkle_tree::MerkleTree,\n        used_nullifiers: Mapping&lt;[u8; 32], bool&gt;,\n        poseidon: PoseidonRef,\n        verifier: MixerVerifierRef,\n    }&gt; for <a class=\"struct\" href=\"mixer/mixer/struct.Mixer.html\" title=\"struct mixer::mixer::Mixer\">Mixer</a>","synthetic":false,"types":["mixer::mixer::Mixer"]}];
implementors["mixer_verifier"] = [{"text":"impl ContractDispatchableMessages&lt;#[derive(SpreadAllocate)]\n    pub struct MixerVerifier {\n        vk_bytes: Vec&lt;u8&gt;,\n    }&gt; for <a class=\"struct\" href=\"mixer_verifier/mixer_verifier/struct.MixerVerifier.html\" title=\"struct mixer_verifier::mixer_verifier::MixerVerifier\">MixerVerifier</a>","synthetic":false,"types":["mixer_verifier::mixer_verifier::MixerVerifier"]}];
implementors["poseidon"] = [{"text":"impl ContractDispatchableMessages&lt;/// Defines the storage of your contract.\n    /// Add new fields to the below struct in order\n    /// to add new static storage fields to your contract.\n    #[ink(storage)]\n    #[derive(SpreadAllocate)]\n    pub struct Poseidon {\n        hasher_params_width_3_bytes: Vec&lt;u8&gt;,\n    }&gt; for <a class=\"struct\" href=\"poseidon/poseidon/struct.Poseidon.html\" title=\"struct poseidon::poseidon::Poseidon\">Poseidon</a>","synthetic":false,"types":["poseidon::poseidon::Poseidon"]}];
implementors["vanchor_verifier"] = [{"text":"impl ContractDispatchableMessages&lt;#[derive(SpreadAllocate)]\n    pub struct VAnchorVerifier {\n        vk_bytes: Vec&lt;u8&gt;,\n    }&gt; for <a class=\"struct\" href=\"vanchor_verifier/vanchor_verifier/struct.VAnchorVerifier.html\" title=\"struct vanchor_verifier::vanchor_verifier::VAnchorVerifier\">VAnchorVerifier</a>","synthetic":false,"types":["vanchor_verifier::vanchor_verifier::VAnchorVerifier"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()