How to run

### `npm install`
### `npm start`

note

1. This demo is using React and Redux
2. For the api supplied, RTK Query in Redux Toolkit is used. [RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview).
3. RTK Query has a catch system build in. So, if the request is the same, the cache will be returned and no request will be sent. 
4. This is configurable via refetchOnMountOrArgChange. I have set the cache to be invalid after 30 seconds.
5. Chart lib is Rechart, which does not have trend functionality. To be able to show the trend line, either I have to calculate the equation by myself or change other lib like echart for react. To save time, I just passed this.
6. Chart color is green if growth > 80 otherwise is blue.
7. Let me know if you have any questions.