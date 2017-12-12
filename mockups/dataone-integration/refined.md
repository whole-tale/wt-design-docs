# WholeTale & DataONE Integration

## Action Items

<ul>
1. Decide whether it is practical to connect Data One and Whole Tale authentication methods.
<br>
2. Agree on a target page that the user gets dropped on when they click Data One's "Whole Tale Link".
<br>
3. Decide on which endpoint we should hit with our request (may depend on #1).
</ul>


## User flow

The current proposal is to drop the user off at the beginning of the Tale creation workflow. This allows the user to fully customize and tailor their Tale. In addition, the user may already be familiar with this interface/workflow.

![user flow, extended](images/user-flow_extended.png)


## Hitting an Endpoint
The current API already already has a method for registering a dataset, `POST /dataset/register`, which requires a payload like:

```json
{
    "dataId": "urn:uuid:42969280-e11c-41a9-92dc-33964bf785c8",
    "doi": "10.5063/F1Z899CZ",
    "name": "Data from a dynamically downscaled projection of past and future microclimates covering North America from 1980-1999 and 2080-2099",
    "repository": "DataONE",
    "size": 178679
}
```

A button could, for example, trigger an async request to this endpoint with an appropriate payload and the specified dataset would then be registered in WholeTale.
This would require one less log in for the user, but at the price of tying Data One and Whole Tale's auth systems together. 

Another possible way is by redirecting the user to a view on the **Dashboard**, using pre-populated query parameters to tell WholeTale which dataset(s) to register, e.g.,

`https://search.dataone.org/#view/doi:10.18739/A2JB90 -> https://dashboard.wholetale.org/register/dataone/?dataset=doi%3A10.18739%2FA2JB90`

The advantage of this solution is that it doesn't require building a potentially complex system for connecting authorizations. In terms of future maintenance and refactoring, the efforts would be minimal. 

