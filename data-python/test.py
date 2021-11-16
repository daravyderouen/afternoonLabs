from tkinter import *
from tkinter.ttk import *
import matplotlib
matplotlib.use("TkAgg")
from matplotlib.figure import Figure 

# OO backend (Tkinter) tkagg() function:
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg

root = Tk()

figure = Figure(figsize=(5, 4), dpi=100)
plot = figure.add_subplot(1, 1, 1)

# x axis values 
x = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"] 
# corresponding y axis values 
y = [10,40,32,84,60,52,18] 

# plotting the points
plot.plot(x, y) 

plot.plot(x, y, color="red", marker="o",  linestyle="--")

canvas = FigureCanvasTkAgg(figure, root)
canvas.get_tk_widget().grid(row=0, column=0)

root.mainloop()

