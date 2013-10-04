using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;
using Microsoft.Phone.Controls;
using Microsoft.Phone.Shell;
using System.ComponentModel;
using System.Windows.Input;
using System.IO.IsolatedStorage;
using System.IO;
using Windows.Storage;
using System.Threading.Tasks;
using Windows.Storage.Streams;

namespace HTML5App1
{
    public partial class MainPage : PhoneApplicationPage
    {
        // Url of Home page
        private string MainUri = "/Html/index.html";

        // Constructor
        public MainPage()
        {
            InitializeComponent();
        }

        ProgressIndicator progBar = new ProgressIndicator();

        private Stack<Uri> _history = new Stack<Uri>();

        protected override void OnBackKeyPress(CancelEventArgs e)
        {
            base.OnBackKeyPress(e);
            e.Cancel = true;
            if (Browser.Source.ToString().EndsWith("#/source"))
            {
                e.Cancel = false;
            }
            Browser.GoBack();
        }

        private void BrowserNavigated(object sender, RoutedEventArgs e)
        { 
        
        }

        private void notifyHandler(object sender, NotifyEventArgs e)
        {
            if (e.Value.Equals("loading"))
            {
                progBar.IsIndeterminate = true;
                progBar.IsVisible = true;
            }
            else if (e.Value.IndexOf("loading") != -1)
            {
                progBar.IsVisible = false;
            }
            else
            {

                Browser.InvokeScript("filecontent", readResourceAsText(e.Value));
            }
        }


        /// <summary>
        /// Reads application resource as a text
        /// </summary>
        /// <param name="options">Path to a resource</param>
        public string readResourceAsText(string pathToResource)
        {

            try
            {
                if (pathToResource.StartsWith("/"))
                {
                    pathToResource = pathToResource.Remove(0, 1);
                }

                var resource = Application.GetResourceStream(new Uri(pathToResource, UriKind.Relative));

                if (resource == null)
                {
                    return "";
                }

                string text;
                StreamReader streamReader = new StreamReader(resource.Stream);
                text = streamReader.ReadToEnd();
                return text;
            }
            catch (Exception ex)
            {
                return "";
            }
        }

        private void Border_ManipulationCompleted(object sender, ManipulationCompletedEventArgs e)
        {
            if (e.FinalVelocities.ExpansionVelocity.X != 0.0 ||
                e.FinalVelocities.ExpansionVelocity.Y != 0.0 )
                e.Handled = true;
            
        }

        private void Border_ManipulationDelta(object sender, ManipulationDeltaEventArgs e)
        {
            if (e.DeltaManipulation.Translation.X != 0.0 ||
                e.DeltaManipulation.Translation.Y != 0.0)
                e.Handled = true;
        }

        private void Browser_Loaded(object sender, RoutedEventArgs e)
        {
            Browser.IsScriptEnabled = true;
            SystemTray.SetProgressIndicator(this, progBar);
            Browser.Navigate(new Uri(MainUri, UriKind.Relative));
        }

        // Handle navigation failures.
        private void Browser_NavigationFailed(object sender, System.Windows.Navigation.NavigationFailedEventArgs e)
        {
            MessageBox.Show("Navigation to this page failed, check your internet connection");
        }

        public string[] content { get; set; }
    }
}
