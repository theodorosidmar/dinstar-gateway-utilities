# Dinstar gateway utilities

Package to integrate via Dinstar and operate utilities via command lines.

## Args definitions

```
--host (Dinstar host)
--username (Dinstar username)
--password (Dinstar password)
--ports or -p (Ports to send the message)
--message or -m (Message to be sent)
--phoneNumbers or -n (Phones you want to text - DDD + NUMBER)
--interval or -i (Interval in seconds between one send and the other)
```

## Sending SMS

To send a SMS, you need to execute the following command line. Interval is optional.
```
node index.js --host host --username username --password password -p 0 1 2 -m "My SMS" -n 21999999999 21888888888 -i 5
```

Sending order:
```
n0p0 > n0p1 > n0p2 > n1p0 > n1p1 > n1p2
```

Where **n** is the phone number and **p** is the port.