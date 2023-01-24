---
title: Run a Substrate Node
slug: /getting-started/running-substrate
---

The [substrate-contracts-node](https://github.com/paritytech/substrate-contracts-node)
is a simple Substrate blockchain which is configured to include the `contracts` module.
It's a comfortable option if you want to get a quickstart.

[After successfully installing `substrate-contracts-node`](/getting-started/setup#installing-the-substrate-smart-contracts-node),
you can start a local development chain by running:

```bash
substrate-contracts-node
```

![An image of the terminal starting a Substrate node](/img/substrate-contracts-node.png)

You can interact with your node using [the Contracts UI](https://contracts-ui.substrate.io).
Once you have the webpage open, you have to configure the UI to connect to the locally running node:

- Click on the dropdown selector at the top left corner.
- Choose "Local Node".

![Connect to local node](/img/contracts-ui-local-node.png)
