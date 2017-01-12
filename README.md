##Performance comparison
#PostalJS vs. ZeroMQ

###PostalJS
```Time for 10K msgs: 20.759ms```

###ZeroMQ
```Time for 10K msgs: 209.997ms```

##Conclusion
PostalJS is about 10x faster. Also you dont need to parse the messages to JSON, which is good.

##Disclaimer
This result is not general and you should test these libraries for your own purposes. The performance will change in different usecases.