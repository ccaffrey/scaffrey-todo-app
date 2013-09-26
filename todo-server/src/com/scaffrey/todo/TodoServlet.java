package com.scaffrey.todo;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class TodoServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		PrintWriter out = response.getWriter();
		String requestedPath = request.getRequestURI();

		// Handle request for list of tasks
		if (requestedPath != null
				&& requestedPath.contains("/todo-server/request/tasks")) {
			out.println("task 1");
			out.println("task 2");
		} else {
			out.println("Unknown request");
		}
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String requestedPath = request.getRequestURI();

		// Handle ogin requests
		if (requestedPath != null
				&& requestedPath.equals("/todo-server/request/login")) {
			String username = request.getParameter("username");
			String password = request.getParameter("password");

			PrintWriter out = response.getWriter();
			out.print("login-failed");
		}
	}
}
