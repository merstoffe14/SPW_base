from fastapi import APIRouter
from serialBridge import SerialBridge

bridge = SerialBridge(baudrate=115200)
router = APIRouter()


@router.get("/example")
async def example():
    return bridge.get_status()

@router.get("/sendcommand")
async def sendcommand(command):
    await bridge.send_command(command)

# GRBL SPECIFIC
# @router.get("/goto")
# async def goto(x: float, y: float, z: float, sys: int):
#     await bridge.goto(x, y, z, sys)