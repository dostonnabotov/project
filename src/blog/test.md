# OSI Model

It stands for **Open System Interconnection** model, and is used to define how the data is transferred from one computer to another. In order to accomplish successful communication between computers or networks, 7 layers are created by International Organization for standardization in 1984. 

7 Layers:

1. **Physical** - Media signal and binary transmission
2. **Data Link** - Physical addressing
3. **Network** - Path determination
4. **Transport** - End-to-end connections and reliability
5. **Session** - Interhost communication
6. **Presentation** - Data representation and encryption
7. **Application** - Network process to application

> Each layer is a package of protocol. Application does not mean that it includes applications like Chrome or Firefox, but rather protocols that are needed to make these applications work correctly.


## Application Layer

Used by Network Applications. It uses application protocols, like HTTP, HTTPS, FTP and more.

- File Transfer - done with the help FTP
- Web Surfing - done with the help HTTP/s
- Emails - done with+ the help SMTP
- Virtual Terminals - done with the help Telnet


## Presentation Layer

It performs three main operations:

1. Translation
2. Data Compression
3. Encryption / Decryption

### Translation

It recieves the data from Application Layer. This data is usually the form of numbers and characters. And, it converts these into machine understandable formats.

e.g. ASCII --> EBCDIC

### Data Compression

It reduces the numbers of bits that are used in original data.
Reduces the amount of space, and save time. Very helpful for real-time video and audio streaming

However, data can be:

- Lossy
- Loseless


### Encryption / Decryption

it enhances security of the data. In the sender's side, the data is encrypted, while on the reciever's side, it is back decrypted.

SSL (**Secure Sockets Layer**) is used for encryption and decryption

## Session Layer

When computer connects with server, the server performs three main operations:

1. Authentication
2. Authorization
3. Session Management

### Authentication

It is the process of verifying who you are. Server uses username and password. Once it matches, connection is established between the user and server.

### Authorization

It is the process of whether you have permission who have access to the site/page

### Session Management

Session Layer keeps track of data downloaded, such as *text files, images and e.t.c*. In the user's side, they are received as data packets. And, Session Layer keeps track of which data packets belong to text files or image files.

APIs, NETBIOS which allows applications in different computers.


## Transport Layer

Protocols:

- **TCP** - Transmission Control Protocol
- **UDP** - User Datagram Protocol


Services:

- Connection-oriented Transmission ==> TCP
- Connectionless Transmission ==> UDP

controls the reliability of communication through three ways:

1. Segmentation
2. Flow Control
3. Error Control

Transport Layer passes the data to Network Layer

### Segmentation

The data recieved from Session Layer is divided into small data units, called **segments**. Each segment contains a source, destination port number and a sequence number. 

Port number helps to direct each segment to the correct application

Sequence number helps to reassemble the segments in the correct order to form correct message at the reciever.

### Flow Control

Transport Layer controls the amount of data being transmitted. 

Example: 

Consider our mobile phone is connected to server. Suppose the server can transmit data maximum 100 Mbps, and our mobile can process data maximum 10 Mbps. Now, we are downloading the file from servers. 

Server starts to send 50 Mbps, which is greater than our mobile can proces. So, mobile phone with the help of **Transport Layer** can tell the server the slow down the transmission rate up to 10 Mbps, so no data is lost.

Server sends 5 Mbps. And mobile phone can tell the server to increase the data trasmission rate up to 10 Mbps to maintain system performance.

### Error Control

If some data does not arrive the destination, Transport Layer uses **Automatic Repeat Request** to retransmit the lost or corrupted data. A group of bits, called **Checksum** is added to each segment to find missing data.


### TCP

Feedback is provided, and lost data can be retranmitted

Example: WWW, Email, FTP

### UDP

Even though becoming faster protocol than TCP, it does not provide feedback on data

Example: Online Streaming movies, Video games, songs, TFTP, DNS


## Network Layer

works on transmission of packets from one computer to another in different networks

It performs 3 main functions:

1. Logical Addressing
2. Path Determination
3. Routing


