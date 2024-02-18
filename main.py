import sys
from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5.QtGui import QIcon


def window():
    app = QApplication(sys.argv)
    win = QMainWindow()
    win.setGeometry(1200, 300, 500, 500)
    win.setWindowTitle("Test")
    win.show()
    sys.exit(app.exec_())
#what is lil bro doing  

window()