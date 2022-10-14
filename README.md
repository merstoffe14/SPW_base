# Welcome to SPW_base!

SPW stands for Serial-Python-Web. It is a template that you can use to quickly set up a website that directly connects to a microcontroller (For example, one that runs GRBL)!  
This readme will contain a set-up guide and a small description of the functions already present in this template.

There are three important packages that this template uses:

- **PySeria**l to connect the system that runs this software to the microcontroller.
- the **FastAPI**  webframework for the API calls.
- **Uvicorn** to host everything.



```mermaid
graph LR
A[Microcontroller ]
B((Server))
A == PySerial bridge --> B
B == PySerial bridge --> A
C[Web interface]
C -- FastAPI calls --> B
B -- FastAPI calls --> C
```



# Set up guide
* First of all, fork this repository and give it a relevant name.
* Install the required python packages using 
```python
pip install -r requirements.txt
```
* Run the uvicorn command to host the website locally:
```python
uvicorn main:app --reload
```
# Files

| Filename    | Description |
| ----------- | ----------- |
| main.py      | Sets everything up      |
| router.py  			| Contains all the api endpoints       |
| serialBridge.py       | Establishes the connection between python and the microcontroller       |
|requirements.txt | Contains the required python packages       |
| index.html      | The website's homepage       |
| index.js 			| The javascript that runs on the homepage        |

You can add all the functionality you need to these files. This is just the start.
Currently there is no CSS file, this is because the index.html currently uses **Bootstrap 5**

# Functions
[WIP]















